import type { Meta, StoryObj } from '@storybook/vue3';
import type { Args, ArgTypes } from "@storybook/types"
import {  h } from "vue";

import {BTag} from '../components/BTag';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta = {
  title: 'Example/BTag JSX',
  component: BTag,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs']
} satisfies Meta<typeof BTag>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */

export const JSXSyntax: Story = {
  args: {
    label: ' Rendered Using JSX Syntax',
    size: 'small',
  },
  render(args:Args) {
    return <BTag {...args} />;
  }
};

export const HRenderFunction: Story = {
  args:{
    label: ' Rendered Using h() function',
  },
  render(args: Args) {
    return h(BTag, args);
  },

}

export const CompositionApiComponent: Story = {
  args:{
    label: ' Rendered using Component with Composition API  ',
  },
  render(args: Args) {
    return ({
      components: { BTag },
      setup(props: any, { attrs }: any){
        return { props , args , attrs}
    }, 
      template: `<pre>{{ JSON.stringify(args , 0, 2)}}</pre> 
                 <BTag v-bind="args"  />` 
    });
  }  
}


export const OptionsApiComponent: Story = {
  args:{
    label: ' Rendered using Component with Options API  ',
  },
  render(args:Args , { argTypes }:{ argTypes: ArgTypes}) {
    return ({
      props: Object.keys(argTypes),
      data: () => ({ args }),
      components: { BTag },
      template: `<pre>{{ JSON.stringify(args,0,2)}}</pre><BTag v-bind="args" />`
    });
  }  
}

