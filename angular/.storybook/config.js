import { configure, addDecorator, addParameters } from '@storybook/angular';
import { withA11y } from '@storybook/addon-a11y';
import sparkTheme from "../../storybook-theming/storybook-spark-theme";
import '../src/polyfills';
import '!style-loader!css-loader!sass-loader!../../storybook-theming/font-loader.scss';
import '../../storybook-theming/icon-loader';

addDecorator(withA11y);

// Option defaults.
addParameters({
  options: {
    theme: sparkTheme,
  },
});

configure(require.context('../projects/spark-angular/src/lib', true, /\.stories\.(js|ts|tsx|mdx)$/), module);
