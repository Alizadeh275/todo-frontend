import { useForm } from "react-hook-form";
import ProfileForm from "./ProfileForm";
import { useUserContext, type User } from "../../shared/contexts/UserContext";
import { useEffect, useState } from "react";
import { showToast } from "../../shared/utils/toasts";

export default function ProfileFormContainer() {
    const { user, updateUser } = useUserContext();
    const [localAvatar, setLocalAvatar] = useState<string | null>(user.avatarUrl || null);
    const form = useForm<User>({ defaultValues: user });

    useEffect(() => {
        if (!user) return;
        Object.entries(user).forEach(([key, value]) => {
            form.setValue(key as keyof User, value);
        });
    }, [user, form]);

    const handleSubmit = (data: User) => {
        updateUser({ ...data, avatarUrl: localAvatar });
        showToast("تغییرات با موفقیت ذخیره شد.", "success");
    };

    return (
        <ProfileForm
            form={form}
            localAvatar={localAvatar}
            setLocalAvatar={setLocalAvatar}
            onSubmit={handleSubmit}
        />
    );
}
