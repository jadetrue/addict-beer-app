import quicksand from "../src/styles/typography.css";

export const parameters = {
    layout: "centered",
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

export const decorators = [
    (Story) => (
        <div style={{margin: "2em", fontFamily: quicksand}}>
            <Story />
        </div>
    ),
];
