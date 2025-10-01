// components/forms/TodoFormSkeleton.tsx
import Skeleton from "@mui/material/Skeleton";
import { useTheme } from "@mui/material/styles";

const isDark = document.documentElement.classList.contains("dark");

export default function TodoFormSkeleton() {
    const theme = useTheme();
    const skeletonBg = isDark ? theme.palette.grey[800] : theme.palette.grey[300];

    return (
        <div className="flex flex-col sm:flex-row mb-4 gap-2">
            <div className="flex-1 overflow-hidden">
                <Skeleton variant="rectangular" height={50} animation="wave" sx={{ borderRadius: 2, bgcolor: skeletonBg }} />
            </div>
            <div className="w-full sm:w-[120px] overflow-hidden">
                <Skeleton variant="rectangular" height={50} animation="wave" sx={{ borderRadius: 2, bgcolor: skeletonBg }} />
            </div>
        </div>
    );
}
