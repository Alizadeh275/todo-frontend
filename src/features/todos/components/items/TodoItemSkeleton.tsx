import { Skeleton } from "@mui/material";

export default function TodoItemSkeleton() {
    return (
        <div className="flex justify-between items-center p-1 mb-1">
            <Skeleton
                variant="rectangular"
                width="100%"
                height={50}
                animation="wave"
                style={{ borderRadius: 8 }}
            />
        </div>
    );
}