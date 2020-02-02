import React from 'react';
import QueueAnim from 'rc-queue-anim';

class PullRequests extends React.Component {
  state = {};

  render() {
    return (
      <h1>Hello Pull Requests</h1>
    );
  }
}

const Page = () => (
  <section className="container-fluid container-mw-xl chapter" >
    <QueueAnim type="bottom" className="ui-animate">
      <div><PullRequests /></div>
    </QueueAnim>
  </section>
);

export default Page;
