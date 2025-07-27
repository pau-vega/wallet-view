import type { Meta, StoryObj } from "@storybook/nextjs";
import { Typography } from "@/components/ui/typography";

const meta: Meta<typeof Typography> = {
  title: "UI/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "p",
        "large",
        "lead",
        "small",
        "muted",
        "blockquote",
        "inline-code",
      ],
      description: "The typography variant to display",
    },
    children: {
      control: "text",
      description: "The text content to display",
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    variant: "h1",
    children: "Heading 1 - Main Title",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Large, centered heading with serif font and extra bold weight. Used for main page titles.",
      },
    },
  },
};

export const H2: Story = {
  args: {
    variant: "h2",
    children: "Heading 2 - Section Title",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Medium heading with bottom border. Used for section titles and major content divisions.",
      },
    },
  },
};

export const H3: Story = {
  args: {
    variant: "h3",
    children: "Heading 3 - Subsection",
  },
  parameters: {
    docs: {
      description: {
        story: "Smaller heading for subsections and content organization.",
      },
    },
  },
};

export const H4: Story = {
  args: {
    variant: "h4",
    children: "Heading 4 - Minor Section",
  },
  parameters: {
    docs: {
      description: {
        story: "Smallest heading variant for minor content divisions.",
      },
    },
  },
};

export const Paragraph: Story = {
  args: {
    variant: "p",
    children:
      "This is a paragraph of text. It demonstrates the default paragraph styling with proper line height and spacing. Paragraphs are the most common text element used for body content.",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Default paragraph text with proper line height and spacing. Used for body content.",
      },
    },
  },
};

export const Large: Story = {
  args: {
    variant: "large",
    children: "Large Text Element",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Large text with semibold weight. Used for emphasized content or larger body text.",
      },
    },
  },
};

export const Lead: Story = {
  args: {
    variant: "lead",
    children:
      "This is lead text that introduces a section or article. It's styled with muted foreground color and larger size to draw attention.",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Lead text with muted color and larger size. Used for introductory content or article summaries.",
      },
    },
  },
};

export const Small: Story = {
  args: {
    variant: "small",
    children: "Small text element",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Small text with medium weight. Used for captions, footnotes, or secondary information.",
      },
    },
  },
};

export const Muted: Story = {
  args: {
    variant: "muted",
    children: "Muted text for secondary information",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Muted text with reduced opacity. Used for secondary information, hints, or less important content.",
      },
    },
  },
};

export const Blockquote: Story = {
  args: {
    variant: "blockquote",
    children:
      "This is a blockquote. It's used to highlight important quotes or citations with a left border and italic styling.",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Blockquote with left border and italic styling. Used for quotes, citations, or highlighted content.",
      },
    },
  },
};

export const InlineCode: Story = {
  args: {
    variant: "inline-code",
    children: "const example = 'code'",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Inline code with background, rounded corners, and monospace font. Used for code snippets within text.",
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="max-w-2xl space-y-6">
      <Typography variant="h1">Typography System</Typography>
      <Typography variant="h2">Overview</Typography>
      <Typography variant="lead">
        This demonstrates all available typography variants in the design
        system.
      </Typography>
      <Typography variant="h3">Headings</Typography>
      <Typography variant="h4">Subheadings</Typography>
      <Typography variant="p">
        This is a paragraph of body text. It demonstrates the default paragraph
        styling with proper line height and spacing for optimal readability.
      </Typography>
      <Typography variant="large">Large text for emphasis</Typography>
      <Typography variant="small">Small text for captions</Typography>
      <Typography variant="muted">
        Muted text for secondary information
      </Typography>
      <Typography variant="blockquote">
        &ldquo;Design is not just what it looks like and feels like. Design is
        how it works.&rdquo; - Steve Jobs
      </Typography>
      <Typography variant="p">
        You can also use{" "}
        <Typography variant="inline-code">inline code</Typography>
        within paragraphs for technical references.
      </Typography>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Complete overview of all typography variants working together in a realistic layout.",
      },
    },
  },
};

export const CustomStyling: Story = {
  args: {
    variant: "h1",
    children: "Custom Styled Heading",
    className: "text-blue-600 underline",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates how custom classes can be combined with the base typography styles.",
      },
    },
  },
};
