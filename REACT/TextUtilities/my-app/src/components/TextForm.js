import React, { useState, useRef } from 'react';
import "./Textform.css";
import { useEffect } from 'react'; // make sure this is at the top with other imports

export default function TextForm(props) {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchCount, setSearchCount] = useState(0);
    const [matches, setMatches] = useState([]); // To store all match details
    const [currentMatch, setCurrentMatch] = useState(0); // To track current match index
    const textRef = useRef();
    useEffect(() => {
        // When the user is typing or clearing the search input
        setSearchCount(0);
        setMatches([]);
        setCurrentMatch(0);
    }, [searchTerm]);
    
    // Function to handle search and counting matches
    const handleSearch = (e) => {
        e.preventDefault();
        if (!searchTerm.trim()) {
            props.showAlert("Please enter something to search.", "warning");
    
            // 🔁 Clear previous results when search is empty
            setSearchCount(0);
            setMatches([]);
            setCurrentMatch(0);
            return;
        }
    
        const regex = new RegExp(searchTerm, "gi");
        const matches = [...text.matchAll(regex)];
    
        if (matches.length === 0) {
            props.showAlert(`No match found for "${searchTerm}"`, "warning");
    
            // 🔁 Reset count and highlight
            setSearchCount(0);
            setMatches([]);
            setCurrentMatch(0);
            return;
        }
    
        setMatches(matches);
        setSearchCount(matches.length);
        setCurrentMatch(0); // 👈 Always reset to first match
        props.showAlert(`${matches.length} match(es) found for "${searchTerm}"`, "success");
    
        textRef.current.setSelectionRange(matches[0].index, matches[0].index + searchTerm.length);
        textRef.current.focus();
    };
    

    // Function to go to the next match
    const goToNextMatch = () => {
        if (currentMatch < matches.length - 1) {
            setCurrentMatch(currentMatch + 1);
            textRef.current.setSelectionRange(
                matches[currentMatch + 1].index,
                matches[currentMatch + 1].index + searchTerm.length
            );
            textRef.current.focus();
        }
    };

    // Function to go to the previous match
    const goToPreviousMatch = () => {
        if (currentMatch > 0) {
            setCurrentMatch(currentMatch - 1);
            textRef.current.setSelectionRange(
                matches[currentMatch - 1].index,
                matches[currentMatch - 1].index + searchTerm.length
            );
            textRef.current.focus();
        }
    };

    const [text, setText] = useState("Enter text here🫡");


    const handleUpCLick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", 'success');
    };

    const handledownCLick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowerCase", 'success');
    };

    const HandleONchange = (event) => {
        setText(event.target.value);
    };

    const handleClear = () => {
        setText('');
        props.showAlert("Text cleared!", 'success');
    };

    const toTitleCase = (text) => {
        return text
            .split("\n")
            .map(line =>
                line
                    .toLowerCase()
                    .split(" ")
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")
            )
            .join("\n");
    };

    const handleTitleClick = () => {
        let newText = toTitleCase(text);
        setText(newText);
        props.showAlert("Converted to TitleCase", 'success');
    };

    const handleRemoveSpaces = () => {
        let newText = text.split(/\s+/).join(' ').trim();
        setText(newText);
        props.showAlert("Extra spaces removed", "success");
    };

    const handleCopy = () => {
        textRef.current.select();
        navigator.clipboard.writeText(textRef.current.value);
        props.showAlert("Copied to clipboard!", "success");
    };

    const countWordsAndCharacters = (text) => {
        const trimmedText = text.trim();
        const wordCount = trimmedText === "" ? 0 : trimmedText.split(/\s+/).length;
        const charCount = trimmedText.length;
        return { wordCount, charCount };
    };

    const { wordCount, charCount } = countWordsAndCharacters(text);

    return (
        <>
            <div className="container" >
               
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search..."
                    />
                    <button className="btn btn-success my-2" onClick={handleSearch}>Search</button>
                    {/* Search result count */}
                    {searchCount > 0 && (
                        <p className="my-2">
                            🔍 Found <strong>{searchCount}</strong> match(es) for "<strong>{searchTerm}</strong>"
                        </p>
                    )}

                    {/* Navigation buttons for multiple matches */}
                    <button className="btn btn-success" onClick={goToPreviousMatch} disabled={currentMatch === 0}>Previous</button>
                    <button className="btn btn-success mx-2" onClick={goToNextMatch} disabled={currentMatch === matches.length - 1}>Next</button>

                
                </div>
                    <textarea
                        ref={textRef}
                        className="form-control"
                        value={text}
                        onChange={HandleONchange}
                        id="MYBOX"
                        rows="8"

                    ></textarea>
                </div>
                <button className="btn btn-success" onClick={handleUpCLick}>Uppercase</button>
                <button className="btn btn-success mx-2" onClick={handledownCLick}>Lowercase</button>
                <button className="btn btn-success mx-2" onClick={handleClear}>Clear</button>
                <button className="btn btn-success mx-2" onClick={handleTitleClick}>Title Case</button>
                <button className="btn btn-success mx-2" onClick={handleRemoveSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-success mx-2" onClick={handleCopy}>Copy to Clipboard</button>
            </div>
           

            <div className="container my-3">
                <h3>Your text summary</h3>
                <p>{wordCount} words and {charCount} characters</p>
                <p>{(0.008 * wordCount).toFixed(2)} minutes read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter something to preview"}</p>
            </div>



        </>
    );
}
