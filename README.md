# MyBookShelf Web App ([my-book-shelf.com](http://my-book-shelf.com))

React frontend for **MyBookShelf**, your book management and reading companion.

<img width="1680" alt="image" src="https://github.com/user-attachments/assets/5d3cb778-a689-40ee-ad5e-30b6321376de">

<img width="1680" alt="image" src="https://github.com/user-attachments/assets/4e955660-153a-44b9-96f1-b4ab1e078c4d">

## Key Features

### 📚 Track Your Reading Progress
- **Current Reads:** Keep track of the books you're currently reading.
- **TBR (To Be Read) List:** Organize the books you plan to read next.
- **Finished Books:** Archive the books you've completed and relive the journey.

### 🌟 Book Recommendations
- **Personalized Recommendations:** Get book suggestions based on your reading history and preferences.
- **Bestsellers & New Releases:** Explore popular books and stay updated with the latest releases.

### ✍️ Share Book Reviews & Quotes
- **Write Reviews:** Share your thoughts on the books you've read.
- **Highlight Quotes:** Capture and share memorable quotes from your favorite books.

## Technologies Used

- **React** (Create React App)
- **React Router**
- **Material UI** and custom CSS

The API lives in a separate backend repository. This app talks to it over HTTP using JWT authentication.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm --prefix frontend install
   ```

2. **Configure the API URL** — copy `frontend/.env.example` to `frontend/.env` and set your backend base URL:
   ```bash
   cp frontend/.env.example frontend/.env
   ```
   Example:
   ```
   REACT_APP_API_BASE_URL=http://localhost:4000
   ```

3. **Run the development server:**
   ```bash
   npm start
   ```

   The app opens at [http://localhost:3000](http://localhost:3000). Ensure your backend is running and reachable at the URL in `.env`.

4. **Production build:**
   ```bash
   npm run build
   ```

## Contributing

1. Fork the repository.
2. Create a branch: `git checkout -b feature-branch`
3. Make your changes and commit.
4. Push and open a pull request.

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

## Connect with Us

- **Website:** [my-book-shelf.com](http://my-book-shelf.com)
- **Twitter:** [@MyBookShelf](https://twitter.com/MyBookShelf)
- **Facebook:** [MyBookShelf](https://facebook.com/MyBookShelf)
- **Instagram:** [@MyBookShelf](https://instagram.com/MyBookShelf)

## Citations

Mengting Wan, Julian McAuley, "Item Recommendation on Monotonic Behavior Chains", in RecSys'18. [bibtex]
Mengting Wan, Rishabh Misra, Ndapa Nakashole, Julian McAuley, "Fine-Grained Spoiler Detection from Large-Scale Review Corpora", in ACL'19. [bibtex]
