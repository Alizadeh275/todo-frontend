import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useUser, type User } from "../../shared/hooks/userContext";
import AvatarUploader from "../../shared/components/AvatarUploader";
import { showToast } from "../../shared/utils/toasts";

export default function ProfileForm() {
    const { user, updateUser } = useUser();

    const [localAvatar, setLocalAvatar] = useState<string | null>(user.avatarUrl || null);

    const { register, handleSubmit, setValue } = useForm<User>({
        defaultValues: user || {
            name: "",
            email: "",
            bio: "",
            avatarUrl: null,
        },
    });

    // Load user data into form
    useEffect(() => {
        if (!user) return;
        Object.entries(user).forEach(([key, value]) => {
            setValue(key as keyof User, value);
        });
        setLocalAvatar(user.avatarUrl || null);
    }, [user, setValue]);

    const onSubmit = (data: User) => {
        // Only update context on submit
        updateUser({ ...data, avatarUrl: localAvatar });
        showToast("تغییرات با موفقیت ذخیره شد.", "success");
        console.log("Updated profile:", { ...data, avatarUrl: localAvatar });
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
        >
            <h2 className="text-xl font-bold mb-4 text-center">مدیریت پروفایل</h2>

            {/* Avatar */}
            <div className="flex justify-center">
                <AvatarUploader
                    avatarUrl={localAvatar}
                    onFileChange={setLocalAvatar} // only update local state
                />
            </div>

            {/* Name */}
            <div>
                <label className="block mb-1 font-medium">نام</label>
                <input
                    {...register("name", { required: "نام الزامی است" })}
                    className="w-full border rounded-lg p-2 dark:bg-gray-700 dark:border-gray-600"
                />
            </div>

            {/* Email */}
            <div>
                <label className="block mb-1 font-medium">ایمیل</label>
                <input
                    type="email"
                    {...register("email", { required: "ایمیل الزامی است" })}
                    className="w-full border rounded-lg p-2 dark:bg-gray-700 dark:border-gray-600"
                />
            </div>

            {/* Bio */}
            <div>
                <label className="block mb-1 font-medium">بیو</label>
                <textarea
                    {...register("bio")}
                    className="w-full border rounded-lg p-2 dark:bg-gray-700 dark:border-gray-600"
                />
            </div>

            <button
                type="submit"
                className="cursor-pointer w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2 transition"
            >
                ذخیره تغییرات
            </button>
        </form>
    );
}
