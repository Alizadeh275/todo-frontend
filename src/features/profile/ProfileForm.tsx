import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useUser, type User } from "../../shared/hooks/useUser";
import AvatarUploader from "../../shared/components/AvatarUploader";

export default function ProfileForm() {
    const { user, updateUser } = useUser();
    const [avatarBase64, setAvatarBase64] = useState<string | null>(user.avatarUrl || null);

    const { register, handleSubmit, setValue } = useForm<User>({
        defaultValues: user,
    });

    // Load user data into form on mount
    useEffect(() => {
        Object.entries(user).forEach(([key, value]) => {
            setValue(key as keyof User, value);
        });
    }, [user, setValue]);

    // Convert file to Base64
    const handleAvatarChange = (file: File | null) => {
        if (!file) {
            setAvatarBase64(null);
            return;
        }
        const reader = new FileReader();
        reader.onloadend = () => {
            setAvatarBase64(reader.result as string);
        };
        reader.readAsDataURL(file);
    };

    const onSubmit = (data: User) => {
        updateUser({ ...data, avatarUrl: avatarBase64 });
        alert("پروفایل ذخیره شد ✅");
        console.log("Updated profile:", { ...data, avatarUrl: avatarBase64 });
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
        >
            <h2 className="text-xl font-bold mb-4 text-center">مدیریت پروفایل</h2>

            {/* Avatar */}
            <AvatarUploader avatarUrl={avatarBase64} onFileChange={handleAvatarChange} />

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
