class MyCircularQueue {
    private int size = 0, head = 0, tail = -1;
    private final int[] arr;

    public MyCircularQueue(int k) {
        arr = new int[k];
    }

    public boolean enQueue(int value) {
        if (isFull())
            return false;

        tail = ++tail % arr.length;
        arr[tail] = value;
        size++;

        return true;
    }

    public boolean deQueue() {
        if (isEmpty())
            return false;

        head = ++head % arr.length;
        size--;

        return true;
    }

    public int Front() {
        return isEmpty() ? -1 : arr[head];
    }

    public int Rear() {
        return isEmpty() ? -1 : arr[tail];
    }

    public boolean isEmpty() {
        return size == 0;
    }

    public boolean isFull() {
        return size == arr.length;
    }
}