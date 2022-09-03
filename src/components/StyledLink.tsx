import { Typography } from '@mui/material';
import Link from 'next/link';
import { ReactFCProps } from '../sharedTypes';
import { UrlObject } from 'url';

type Props = {
    link: string | UrlObject;
    style: React.CSSProperties;
    color?: string;
} & ReactFCProps;

export default function StyledLink({ children, link, style, color }: Props) {
    return (
        <Link href={link} style={{ textDecoration: 'none' }}>
            <Typography
                variant="subtitle1"
                style={{ ...style, cursor: 'pointer' }}
                color={color}
            >
                {children}
            </Typography>
        </Link>
    );
}
