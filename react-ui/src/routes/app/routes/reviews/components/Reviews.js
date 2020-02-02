import React from 'react';
import QueueAnim from 'rc-queue-anim';

class Reviews extends React.Component {
  state = {};

  render() {
    return (
      <h1>Hello Reviews</h1>
    );
  }
}

const Page = () => (
  <section className="container-fluid container-mw-xl chapter" >
    <QueueAnim type="bottom" className="ui-animate">
      <div><Reviews /></div>
    </QueueAnim>
  </section>
);

export default Page;
