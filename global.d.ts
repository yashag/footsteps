interface SvgrComponent extends React.StatelessComponent<React.SVGAttributes<SVGElement>> {}

declare module "*.svg" {
    const content: SvgrComponent;
    export default content;
}

declare module "*.png" {
    const content: string;
    export default content;
}
