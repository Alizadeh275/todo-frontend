// components/forms/TodoFormSkeleton.tsx
import Skeleton from "@mui/material/Skeleton";

export default function TodoFormSkeleton() {
    return (
        <div className="flex flex-col sm:flex-row mb-4 gap-2">
            <div className="flex-1 overflow-hidden">
                <Skeleton variant="rectangular" height={50} animation="wave" style={{ borderRadius: 8 }}
                />
            </div>
            <div className="overflow-hidden">
                <Skeleton variant="rectangular" width={120} height={50} animation="wave" style={{ borderRadius: 8 }}
                />
            </div>
        </div>
    );
}
