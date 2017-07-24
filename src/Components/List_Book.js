import React, { Component } from 'react'
import BookShelf from './Book_Shelf'
class ListBook extends Component {
  render () {
    const books = this.props.books

    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf books={books.filter((book)=>(
                book.shelf === "currentlyReading"
              ))}
              title = "Currently Reading"
              onChangeShelf={this.props.onChange}/>

            <BookShelf books={books.filter((book)=>(
                book.shelf === "read"
              ))}
              title = "Read"
              onChangeShelf={this.props.onChange}/>
            <BookShelf books={books.filter((book)=>(
                book.shelf === "wantToRead"
              ))}
              title = "Want to Read"
              onChangeShelf={this.props.onChange}/>
          </div>
        </div>
        <div className="open-search">
          <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div>
      </div>
    )
  }
}

export default ListBook;
