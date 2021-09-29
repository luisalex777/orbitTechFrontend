import { unstable_createMuiStrictModeTheme } from '@material-ui/core/styles';

const theme = unstable_createMuiStrictModeTheme({
    palette : {
        primary : {
            light : "#63a4fff",
            main : "#60d100",
            dark : "#6dff33",
            contrastText : "#ecfad8"
        }

    },
});

export default theme;