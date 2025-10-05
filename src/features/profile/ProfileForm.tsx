import AvatarUploader from "../../shared/components/AvatarUploader";
import type { User } from "../../shared/contexts/UserContext";
import type { UseFormReturn } from "react-hook-form";

interface ProfileFormViewProps {
    form: UseFormReturn<User>;
    localAvatar: string | null;
    setLocalAvatar: (url: string | null) => void;
    onSubmit: (data: User) => void;
}

export default function ProfileForm({
    form,
    localAvatar,
    setLocalAvatar,
    onSubmit,
}: ProfileFormViewProps) {
    const { register, handleSubmit } = form;

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
                <label className="block mb-1 font-medium">نام</label>
                <input
                    {...register("name", { required: "نام الزامی است" })}
                    className="w-full border rounded-lg p-2 dark:bg-gray-700 dark:border-gray-600"
                />
            </div>

            <div>
                <label className="block mb-1 font-medium">ایمیل</label>
                <input
                    type="email"
                    {...register("email", { required: "ایمیل الزامی است" })}
                    className="w-full border rounded-lg p-2 dark:bg-gray-700 dark:border-gray-600"
                />
            </div>

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
