import Header from '../components/header';

export default function UXDesign() {
    return (
        <main className="min-h-screen bg-slate-950 bg-fixed" style={{ backgroundImage: `url(${backGround})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <>
                <Header />
            </>
        </main>
    )
}