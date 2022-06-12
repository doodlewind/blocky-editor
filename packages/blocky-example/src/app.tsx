import { Component, JSX } from "preact";
import { EditorController } from "blocky-core";
import { BlockyEditor } from "blocky-preact";
import makeBoldedTextPlugin from "blocky-core/dist/plugins/boldedTextPlugin";
import "blocky-core/css/bolded-text-plugin.css";
import "blocky-core/css/blocky-core.css";
import "./app.css"

interface AppState {
  headingContent: string;
}

class App extends Component<{}, AppState> {
  private editorController: EditorController;

  constructor(props: {}) {
    super(props);
    this.editorController = new EditorController({
      plugins: [
        makeBoldedTextPlugin(),
      ],
    });
    this.state = {
      headingContent: 'Blocky Editor',
    }
  }

  private handleHeadingChanged = (e: JSX.TargetedEvent<HTMLInputElement>) => {
    this.setState({
      headingContent: (e.target! as HTMLInputElement).value,
    });
  }

  render() {
    return (
      <div className="blocky-example-app-window">
        <div className="blocky-example-container">
          <div className="blocky-example-title-container">
            <input
              value={this.state.headingContent}
              onChange={this.handleHeadingChanged}
            />
          </div>
          <BlockyEditor controller={this.editorController} />
        </div>
      </div>
    );
  }

}

export default App;
