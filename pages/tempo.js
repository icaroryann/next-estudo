function Tempo(props) {
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return <div>
        <div suppressHydrationWarning>{dynamicDateString} (dinámico)</div>
        <div suppressHydrationWarning>{props.staticDateString} (estático)</div>
    </div>
}

export function getStaticProps() {
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return {
        props: {
            staticDateString
        }
    }
}

export default Tempo;