const withToggle = WrappedComponent => {
  return class WithToggle extends Component {
    state = {
      isOpen: false,
    };

    toggle = () => this.setState(prevState => ({ isOpen: !prevState.isOpen }));

    render() {
      return (
        <>
          <button type="button" onClick={this.toggle}>
            {this.state.isOpen ? 'Hide' : 'Show'}
          </button>

          {isOpen && <WrappedComponent {...this.props} />}
        </>
      );
    }
  };
};
