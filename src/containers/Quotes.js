import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addQuote, removeQuote, downvoteQuote, upvoteQuote } from '../actions/quotes';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {

  renderQuotes = () => this.props.quotes.quotes.map((quote) => <QuoteCard key={quote.id} quote={quote} remove={this.deleteQuote} downvote={this.decreaseQuote} upvote={this.increaseQuote}/>)

  deleteQuote = (quote) => {
    this.props.dispatch(removeQuote(quote))
  }

  decreaseQuote = (quote) => {
    this.props.dispatch(downvoteQuote(quote))
  }

  increaseQuote = (quote) => {
    this.props.dispatch(upvoteQuote(quote))
  }

  render() {
    // debugger
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
               {this.renderQuotes()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {quotes: state}
}

//add arguments to connect as needed
export default connect(mapStateToProps)(Quotes);
