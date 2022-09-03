import Typography from '@mui/material/Typography';
import { ReactFCProps } from '../sharedTypes';

export default function PageHeader({ children }: ReactFCProps) {
    return (
        <Typography variant="h4" gutterBottom color="text.secondary">
            <strong>{children}</strong>
        </Typography>
    );
}
