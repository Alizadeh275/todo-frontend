// File: src/shared/components/AvatarUploader.tsx
import { useState, useEffect } from "react";
import { Avatar, IconButton } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import DeleteIcon from "@mui/icons-material/Delete";

const LOCAL_STORAGE_KEY = "todo:user-avatar";

type Props = {
    onChange?: (base64: string | null) => void;
};

export default function AvatarUploader({ onChange }: Props) {
    const [avatar, setAvatar] = useState<string | null>(null);

    // Load avatar from localStorage on mount
    useEffect(() => {
        const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (stored) setAvatar(stored);
    }, []);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] ?? null;
        if (!file) {
            setAvatar(null);
            localStorage.removeItem(LOCAL_STORAGE_KEY);
            if (onChange) onChange(null);
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
            const base64 = reader.result as string;
            setAvatar(base64);
            localStorage.setItem(LOCAL_STORAGE_KEY, base64);
            if (onChange) onChange(base64);
        };
        reader.readAsDataURL(file);
    };

    const handleDelete = () => {
        setAvatar(null);
        localStorage.removeItem(LOCAL_STORAGE_KEY);
        if (onChange) onChange(null);
    };

    return (
        <div className="flex items-center gap-4 mb-4">
            <Avatar src={avatar ?? undefined} sx={{ width: 80, height: 80 }} />
            <div className="flex flex-col gap-2">
                <label>
                    <IconButton color="primary" component="span">
                        <PhotoCamera />
                    </IconButton>
                    <input type="file" accept="image/*" onChange={handleFileChange} hidden />
                </label>
                {avatar && (
                    <IconButton color="error" onClick={handleDelete}>
                        <DeleteIcon />
                    </IconButton>
                )}
            </div>
        </div>
    );
}
