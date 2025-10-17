import AvatarUploader from "../../shared/components/AvatarUploader";
import type { UseFormReturn } from "react-hook-form";
import type { UserSchema } from "../../shared/validations/userSchema";

interface ProfileFormViewProps {
    form: UseFormReturn<UserSchema>;
    localAvatar: string | null;
    setLocalAvatar: (url: string | null) => void;
    onSubmit: (data: UserSchema) => void;
}

export default function ProfileForm({
    form,
    localAvatar,
    setLocalAvatar,
    onSubmit,
}: ProfileFormViewProps) {
    const { register, handleSubmit, formState: { errors } } = form;

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
        >
            <h2 className="text-xl font-bold mb-4 text-center">مدیریت پروفایل</h2>

            <div className="flex justify-center">
                <AvatarUploader avatarUrl={localAvatar} onFileChange={setLocalAvatar} />
            </div>

            <div>
                <label className="block mb-1 font-medium">نام:</label>
                <input
                    placeholder="کاربر نمونه"
                    {...register("name")}
                    className="w-full border rounded-lg p-2 dark:bg-gray-700 dark:border-gray-600 
                               placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-gray-100"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div>
                <label className="block mb-1 font-medium">ایمیل:</label>
                <input
                    type="email"
                    placeholder="user@example.com"
                    {...register("email")}
                    className="w-full border rounded-lg p-2 dark:bg-gray-700 dark:border-gray-600 
                               placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-gray-100"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div>
                <label className="block mb-1 font-medium">بیو:</label>
                <textarea
                    placeholder="توضیحاتی درباره خودتان ..."
                    {...register("bio")}
                    className="w-full border rounded-lg p-2 dark:bg-gray-700 dark:border-gray-600 
                               placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-gray-100"
                />
                {errors.bio && <p className="text-red-500 text-sm mt-1">{errors.bio.message}</p>}
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
