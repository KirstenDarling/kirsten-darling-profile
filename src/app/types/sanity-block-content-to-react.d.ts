declare module "@sanity/block-content-to-react" {
  import * as React from "react";

  interface BlockContentProps {
    blocks: any;
    className?: string;
    renderContainerOnSingleChild?: boolean;
    serializers?: object;
    projectId?: string;
    dataset?: string;
  }

  export default class BlockContent extends React.Component<BlockContentProps> {}
}
