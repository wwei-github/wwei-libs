import React from "react";
import { rest } from 'msw'
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PeopleSelect from "./PeopleSelect";

const Data = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
];

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "业务/PersonSelect",
  component: PeopleSelect,
} as ComponentMeta<typeof PeopleSelect>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PeopleSelect> = (args) => <PeopleSelect />;

export const Default = Template.bind({});
Default.args = {
};

Default.parameters = {
  msw: {
    handlers: [
      rest.get('/selectData', (req, res, ctx) => {
        return res(
          ctx.json({
            data:Data
          })
        )
      }),
    ]
  },
}
