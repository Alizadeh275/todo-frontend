import { useState, useEffect } from "react";
import { Avatar, IconButton } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import DeleteIcon from "@mui/icons-material/Delete";


type Props = {
    avatarUrl?: string | null;
    onFileChange: (base64: string | null) => void;
};

export default function AvatarUploader({ avatarUrl, onFileChange }: Props) {
    const [avatar, setAvatar] = useState<string | null>(avatarUrl || null);

    useEffect(() => {
        setAvatar(avatarUrl || null);
    }, [avatarUrl]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] ?? null;
        if (!file) {
            setAvatar(null);
            onFileChange(null);
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
            const base64 = reader.result as string;
            setAvatar(base64);
            onFileChange(base64);
        };
        reader.readAsDataURL(file);
    };

    const handleDelete = () => {
        setAvatar(null);
        onFileChange(null);
    };

    return (
        <div className="flex flex-col items-center mb-4 gap-2">
            <Avatar src={avatar ?? undefined} sx={{ width: 100, height: 100 }} />
            <div className="flex gap-2">
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
