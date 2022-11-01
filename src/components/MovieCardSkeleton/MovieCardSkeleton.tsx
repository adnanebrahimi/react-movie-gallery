import Paper from "@mui/material/Paper";
import Skeleton from "@mui/material/Skeleton";

export default function MovieCardSkeleton() {
  return (
    <Paper className="flex flex-col gap-2 h-64 p-3">
      <Skeleton variant="rectangular" width={100} height={150} />
      <Skeleton variant="rounded" width={210} height={60} />
    </Paper>
  );
}
