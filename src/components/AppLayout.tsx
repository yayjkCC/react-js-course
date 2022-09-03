import NavigationBar from './NavigationBar';
import Container from '@mui/material/Container';

export default function AppLayout(page: JSX.Element) {
    return (
        <>
            <NavigationBar />
            <Container fixed>{page}</Container>
        </>
    );
}
