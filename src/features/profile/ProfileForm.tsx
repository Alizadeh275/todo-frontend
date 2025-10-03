// File: src/features/profile/components/ProfileForm.tsx
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useUser, type User } from "../../shared/hooks/useUser";
import AvatarUploader from "../../shared/components/AvatarUploader";

export default function ProfileForm() {
    const { user, updateUser } = useUser();
    const [avatarBase64, setAvatarBase64] = useState<string | null>(user.avatarUrl || null);

    const { register, handleSubmit, setValue } = useForm<User>({
        defaultValues: user || {
            name: "",
            email: "",
            bio: "",
            avatarUrl: null,
        },
    });

    // Load user data into form on mount / when user changes
    useEffect(() => {
        if (!user) return;
        Object.entries(user).forEach(([key, value]) => {
            setValue(key as keyof User, value);
        });
        setAvatarBase64(user.avatarUrl || null);
    }, [user, setValue]);

    const onSubmit = (data: User) => {
        // Merge avatarBase64 into user object
        updateUser({ ...data, avatarUrl: avatarBase64 });
        alert("پروفایل ذخیره شد ✅");
        console.log("Updated profile:", { ...data, avatarUrl: avatarBase64 });
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
        >
            <h2 className="text-xl font-bold mb-4 text-center">مدیریت پروفایل</h2>

            {/* Centered Avatar */}
            <div className="flex justify-center">
                <AvatarUploader avatarUrl={avatarBase64} onFileChange={setAvatarBase64} />
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

            {/* Submit */}
            <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2 transition"
            >
                ذخیره تغییرات
            </button>
        </form>
    );
}
