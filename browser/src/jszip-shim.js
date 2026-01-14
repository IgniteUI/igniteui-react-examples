import JSZip from 'jszip';

// This forces the export object to have a 'default' property
// that points to the constructor, satisfying the problematic code.
export default JSZip;
export { JSZip };
