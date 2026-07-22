import MobileLanding from './../../components/landing/MobileLanding';
import WebLanding from './../../components/landing/WebLanding';

function LandingPage() {

    const isPWA= window.matchMedia("(display-mode: standalone)").matches;

    return isPWA
        ? <MobileLanding />
        : <WebLanding />;
}

export default LandingPage;
