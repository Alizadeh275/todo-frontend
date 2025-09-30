// components/forms/TodoFormSkeleton.tsx
import Skeleton from "@mui/material/Skeleton";

export default function TodoFormSkeleton() {
    return (
        <div className="flex flex-col sm:flex-row mb-4 gap-2">
            {/* Input skeleton */}
            <div className="flex-1 overflow-hidden">
                <Skeleton
                    variant="rectangular"
                    height={50}
                    animation="wave"
                    style={{ borderRadius: 8 }}
                />
            </div>

            {/* Button skeleton */}
            <div className="w-full sm:w-[120px] overflow-hidden">
                <Skeleton
                    variant="rectangular"
                    height={50}
                    animation="wave"
                    style={{ borderRadius: 8 }}
                />
            </div>
        </div>
    );
}
