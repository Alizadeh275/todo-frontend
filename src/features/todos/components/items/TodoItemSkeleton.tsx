import { Skeleton } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const isDark = document.documentElement.classList.contains("dark");


export default function TodoItemSkeleton() {
    const theme = useTheme();

    return (
        <div className="flex justify-between items-center p-1 mb-1">
            <Skeleton
                variant="rectangular"
                width="100%"
                height={50}
                animation="wave"
                sx={{
                    borderRadius: 2, // 8px
                    bgcolor: isDark ? theme.palette.grey[800] : theme.palette.grey[300],
                }}
            />
        </div>
    );
}
