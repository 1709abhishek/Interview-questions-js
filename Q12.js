var Queue = (()=>{
    const map = new WeakMap();
    let _items = []
    class Queue{
      constructor(...items){
        //initialize the items in queue
        map.set(this, []);
        _items = map.get(this);
        // enqueuing the items passed to the constructor
        this.enqueue(...items)
      }
      
      enqueue(...items){
        //push items into the queue
        this._items = [...this._items, ...items]
        return this._items;
      }
      
      dequeue(count=1){
        //pull out the first item from the queue
        _items.splice(0,count);
        return this._items;
      }
      
      peek(){
        //peek at the first item from the queue
        return _items[0]
      }
      
      size(){
        //get the length of queue
        return _items.length
      }
      
      isEmpty(){
        //find whether the queue is empty or no
        return _items.length===0
      }
      
      toArray(){
        return _items
      }
      
    }
    return Queue
  })()