1. async / await

Used for handling asynchronous operations (like API calls).

const searchMovies = async (title) => {
  const response = await fetch(`${API_URL}&s=${title}`);
  const data = await response.json();

  setMovies(data.Search);
};
async makes a function asynchronous.
await pauses execution until the Promise finishes.
Makes code easier to read than .then().
2. fetch()

Used to get data from an API.

const response = await fetch(`${API_URL}&s=${title}`);

Returns a Response object.

Convert it to JSON:

const data = await response.json();
3. useState

Stores and updates component data.

const [movies, setMovies] = useState([]);
const [searchTerm, setSearchTerm] = useState('');
movies → current value.
setMovies() → updates movies.
Updating state causes React to re-render.
4. useEffect

Runs side effects.

useEffect(() => {
  searchMovies('Batman');
}, []);

The empty dependency array [] means:

Run only once when the component first mounts.

Similar to:

// "On page load"
5. Props

Passing data from parent component to child component.

Parent:

<MovieCard movie={movie} />

Child:

const MovieCard = ({ movie }) => {
  return (
    <h3>{movie.Title}</h3>
  );
};

Props are read-only.

6. Controlled Input
<input
  placeholder="Search for movies"
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>
value={searchTerm}

Displays the current state value inside the input.

onChange

Runs whenever user types.

(e) => setSearchTerm(e.target.value)
e = event object.
e.target = input element.
e.target.value = what the user typed.

Example:

User types:

Batman

Then:

setSearchTerm('Batman');

State becomes:

searchTerm = 'Batman';
7. Event Handling
<img
  src={SearchIcon}
  alt="search"
  onClick={() => searchMovies(searchTerm)}
/>

When the image is clicked:

searchMovies(searchTerm)

is executed.

Suppose:

searchTerm = "Spider Man"

Then:

searchMovies("Spider Man")

which does:

fetch(`${API_URL}&s=Spider Man`)

and updates:

setMovies(data.Search);

which causes React to re-render and show new movie cards.

Flow of your app
User types in input
        ↓
onChange updates searchTerm state
        ↓
User clicks search icon
        ↓
searchMovies(searchTerm)
        ↓
fetch() API call
        ↓
response.json()
        ↓
setMovies(data.Search)
        ↓
State changes
        ↓
React re-renders
        ↓
movies.map()
        ↓
<MovieCard movie={movie} />
        ↓
Movie cards displayed

This project has already exposed you to many of the fundamentals that React interviewers expect:

Components
JSX
Props
State
Event handling
Lists and map()
Conditional rendering
useEffect
useState
API calls
async/await
Fetch API
Controlled components
Parent-child communication

A natural next step would be learning useRef, useContext, React Router, and custom hooks.