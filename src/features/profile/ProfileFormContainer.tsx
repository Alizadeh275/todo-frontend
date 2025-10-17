import { useEffect, useState } from "react";
import { showToast } from "../../shared/utils/toasts";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { userSchema, type UserSchema } from "../../shared/validations/userSchema";
import { useUserStore } from "../../shared/stores/useUserStore";
import ProfileForm from "./ProfileForm";

export default function ProfileFormContainer() {
    const { user, updateUser } = useUserStore();
    const [localAvatar, setLocalAvatar] = useState<string | null>(user?.avatarUrl || null);

    // ✅ integrate Zod resolver
    const form = useForm<UserSchema>({
        resolver: zodResolver(userSchema),
        defaultValues: user || {
            name: "",
            email: "",
            bio: "",
            avatarUrl: null,
        },
        mode: "onChange", // optional: validate while typing
    });

    useEffect(() => {
        if (!user) return;
        Object.entries(user).forEach(([key, value]) => {
            form.setValue(key as keyof UserSchema, value);
        });
    }, [user, form]);

    const handleSubmit = (data: UserSchema) => {
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
