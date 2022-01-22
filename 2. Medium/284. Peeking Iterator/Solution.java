// Java Iterator interface reference:
// https://docs.oracle.com/javase/8/docs/api/java/util/Iterator.html

class PeekingIterator implements Iterator<Integer> {
    Iterator<Integer> stditerator;
    Integer peeked;

    public PeekingIterator(Iterator<Integer> iterator) {
        stditerator = iterator;

        if (stditerator.hasNext())
            peeked = next();
    }

    // Returns the next element in the iteration without advancing the iterator.
    public Integer peek() {
        if (peeked == null)
            peeked = next();

        return peeked;
    }

    // hasNext() and next() should behave the same as in the Iterator interface.
    // Override them if needed.
    @Override
    public Integer next() {
        if (peeked == null) {
            return stditerator.next();

        } else {
            Integer res = peeked;
            peeked = null;
            return res;
        }
    }

    @Override
    public boolean hasNext() {
        return stditerator.hasNext() || peeked != null;
    }
}