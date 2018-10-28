const colorOne = '#F0E5C3';
const colorTwo = '#404040';
const colorThree = '#575252';
const Letra= 'Courier New, Courier, monospace';

const Style = {
        card: {
        backgroundColor: 'rgb(168, 167, 162)',
        borderRadius: '2px',
        boxShadow: '0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)',
        display: '-ms-flexbox',
        display: 'flex',
        msFlexDirection: 'column',
        flexDirection: 'column',
        boxSizing: 'border-box',
        margin: '5px auto',
        padding: '25px',
        minHeight: '550px',
        minWidth: '300px',
    },
    cardM:{
        margin: '30px auto',
        width: '400px',
    },
    titleM: {
        fontFamily: Letra,
        MozOsxFontSmoothing: 'grayscale',
        WebkitFontSmoothing: 'antialiased',
        lineHeight: '2rem',
        textDecoration: 'inherit',
        textTransform: 'inherit',
        color: colorTwo,
    },
    input: {
        fontFamily: Letra,
        MozOsxFontSmoothing: 'grayscale',
        WebkitFontSmoothing: 'antialiased',
        fontSize: '1rem',
        lineHeight: '1.75rem',
        fontWeight: '400',
        letterSpacing: '.00937em',
        textDecoration: 'inherit',
        textTransform: 'inherit',
        MsFlexItemAlign: 'end',
        alignSelf: 'flex-end',
        WebkitBoxSizing: 'border-box',
        boxSizing: 'border-box',
        width: '100%',
        height: '100%',
        padding: '20px 12px 6px',
        WebkitTransition: 'opacity .18s cubic-bezier(.4,0,.2,1)',
        OTransition: 'opacity .18s cubic-bezier(.4,0,.2,1)',
        transition: 'opacity .18s cubic-bezier(.4,0,.2,1)',
        border: 'none',
        borderBottom: '1px solid',
        borderRadius: '0',
        background: 'none',
        WebkitAppearance: 'none',
        MozAppearance: 'none',
        appearance: 'none',
        outline: 'none',
    },
        
        label: {
        fontFamily: 'Courier New, Courier, monospace',
        fontWeight: 'bold',
        fontSize: '18px',
        lineHeight: '2rem',
        textDecoration: 'inherit',
        textTransform: 'inherit',
        color: colorTwo,
    },
    navRight: {

    },
    button: {
        fontFamily:  'Courier New, Courier, monospace',
        fontSize: '18px',
        fontWeight: 'bolt',
        padding: '0 8px',
        display: '-ms-inline-flexbox',
        display: 'inline-flex',
        minWidth: '64px',
        height: '36px',
        border: 'none',
        outline: 'none',
        lineHeight: 'inherit',
        overflow: 'hidden',
        verticalAlign: 'middle',
        alignItems: 'center',
        borderRadius: '2px',
        float: 'center',
        margin: '10px 5px',
        background: colorTwo,
        color: colorOne,
    },
    button2: {
        fontFamily:  'Courier New, Courier, monospace',
        fontSize: '18px',
        fontWeight: 'bolt',
        padding: '0 8px',
        display: '-ms-inline-flexbox',
        display: 'inline-flex',
        minWidth: '64px',
        height: '36px',
        border: 'none',
        outline: 'none',
        lineHeight: 'inherit',
        overflow: 'hidden',
        verticalAlign: 'middle',
        alignItems: 'center',
        borderRadius: '2px',
        float: 'center',
        margin: '10px 5px',
        background: colorOne,
        color: colorTwo,
    },
    button3: {
        fontFamily:  'Courier New, Courier, monospace',
        fontSize: '18px',
        fontWeight: 'bolt',
        padding: '0 8px',
        display: '-ms-inline-flexbox',
        display: 'inline-flex',
        minWidth: '64px',
        height: '36px',
        border: 'none',
        outline: 'none',
        lineHeight: 'inherit',
        overflow: 'hidden',
        verticalAlign: 'middle',
        alignItems: 'center',
        borderRadius: '2px',
        float: 'center',
        position: 'absolute',
        right: '30px',
        top: '23%',
        background: colorTwo,
        color: colorOne,
        
    },
    
    buttonIcon: {
        fontFamily: Letra,
        fontSize: '.875rem',
        lineHeight: '2.25rem',
        fontWeight: 'bolt',
        letterSpacing: '.08929em',
        textDecoration: 'none',
        textTransform: 'uppercase',
        MdcRippleFgSize: '0',
        MdcRippleLeft: '0',
        MdcRippleTop: '0',
        MdcRippleFgScale: '1',
        MdcRippleFgTranslateEnd: '0',
        MdcRippleFgTranslateStart: '0',
        WebkitTapHighlightColor: 'rgba(0,0,0,0)',
        willChange: 'transform,opacity',
        padding: '0 8px',
        display: '-ms-inline-flexbox',
        display: 'inline-flex',
        position: 'relative',
        MsFlexAlign: 'center',
        alignItems: 'center',
        MsFlexPack: 'center',
        justifyContent: 'center',
        WebkitBoxSizing: 'border-box',
        boxSizing: 'border-box',
        width: '40px',
        height: '40px',
        border: 'none',
        outline: 'none',
        lineHeight: 'inherit',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        MsUserSelect: 'none',
        userSelect: 'none',
        WebkitAppearance: 'none',
        overflow: 'hidden',
        verticalAlign: 'middle',
        borderRadius: '2px',
        float: 'right',
        margin: '10px 5px',
        borderRadius: '50%',
        color: colorOne,
        hover: colorThree,
        
    },
    nav: {
        height: '50px',
        width: '100%',
        minWidth: '400px',
        backgroundColor: colorTwo,
        color: colorOne,
        display: 'block',
        alignItems: 'Center',
        
    },
    navSpan: {
        fontFamily: 'Courier New, Courier, monospace',
        fontSize: '1.5rem',
        lineHeight: '2rem',
        fontWeight: 'bold',
        margin:'auto',
        position:'center',
       
    },
    navHeader: {
        display: 'inline-flex',
        flex: '1 1 auto',
        margin:'auto',
        
    },
    navStart: {
        MsFlexPack: 'start',
        justifyContent: 'flex-start',
        MsFlexOrder: '1',
        order: '1',
    },
    navEnd: {
        MsFlexPack: 'end',
        justifyContent: 'flex-end',
        MsFlexOrder: '1',
        order: '1',
    },
    avatar: {
        backgroundSize: 'cover',
         height: '40px',
        width: '40px',
        borderRadius: '50%',
        flexShrink: 0,
        margin: 'auto',
    },

};
export default Style