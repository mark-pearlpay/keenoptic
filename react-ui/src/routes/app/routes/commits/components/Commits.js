import React from 'react';
import QueueAnim from 'rc-queue-anim';

class Commits extends React.Component {
  state = {};

  render() {
    return (
      <h1>Hello Commits</h1>
    );
  }
}

const Page = () => (
  <section className="container-fluid container-mw-xl chapter" >
    <QueueAnim type="bottom" className="ui-animate">
      <div><Commits /></div>
    </QueueAnim>
  </section>
);

export default Page;
