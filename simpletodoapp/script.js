class TodoApp {
    constructor() {
        this.todos = this.loadFromLocalStorage();
        this.todoInput = document.getElementById('todoInput');
        this.addBtn = document.getElementById('addBtn');
        this.todoList = document.getElementById('todoList');
        this.taskCounter = document.getElementById('taskCount');
        
        this.init();
    }
    
    init() {
        this.addBtn.addEventListener('click', () => this.addTodo());
        this.todoInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.addTodo();
            }
        });
        
        this.addBtn.addEventListener('mouseenter', () => {
            this.addBtn.style.animation = 'none';
            setTimeout(() => {
                this.addBtn.style.animation = '';
            }, 10);
        });
        
        this.render();
        this.updateTaskCounter();
    }
    
    addTodo() {
        const text = this.todoInput.value.trim();
        if (text === '') return;
        
        this.addBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.addBtn.style.transform = '';
        }, 150);
        
        const todo = {
            id: Date.now(),
            text: text,
            completed: false
        };
        
        this.todos.push(todo);
        this.todoInput.value = '';
        this.saveToLocalStorage();
        this.renderWithAnimation();
        this.updateTaskCounter();
        
        this.todoInput.style.animation = 'inputFlash 0.3s ease-out';
        setTimeout(() => {
            this.todoInput.style.animation = '';
        }, 300);
    }
    
    toggleTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.saveToLocalStorage();
            this.renderWithToggleAnimation(id);
            this.updateTaskCounter();
        }
    }
    
    deleteTodo(id) {
        const todoElement = document.querySelector(`[data-id="${id}"]`);
        if (todoElement) {
            todoElement.style.animation = 'taskDisintegrate 0.5s ease-in forwards';
            setTimeout(() => {
                this.todos = this.todos.filter(t => t.id !== id);
                this.saveToLocalStorage();
                this.render();
                this.updateTaskCounter();
            }, 500);
        } else {
            this.todos = this.todos.filter(t => t.id !== id);
            this.saveToLocalStorage();
            this.render();
            this.updateTaskCounter();
        }
    }
    
    render() {
        this.todoList.innerHTML = '';
        
        this.todos.forEach((todo, index) => {
            const li = document.createElement('li');
            li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
            li.setAttribute('data-id', todo.id);
            li.style.animationDelay = `${index * 0.1}s`;
            
            li.innerHTML = `
                <input type="checkbox" class="todo-checkbox" ${todo.completed ? 'checked' : ''}>
                <span class="todo-text">${this.escapeHtml(todo.text)}</span>
                <button class="delete-btn">TERMINATE</button>
            `;
            
            const checkbox = li.querySelector('.todo-checkbox');
            const deleteBtn = li.querySelector('.delete-btn');
            
            checkbox.addEventListener('change', () => this.toggleTodo(todo.id));
            deleteBtn.addEventListener('click', () => this.deleteTodo(todo.id));
            
            this.todoList.appendChild(li);
        });
    }
    
    renderWithAnimation() {
        this.render();
        const newTask = this.todoList.lastElementChild;
        if (newTask) {
            newTask.style.animation = 'none';
            setTimeout(() => {
                newTask.style.animation = 'taskMaterialize 0.8s ease-out';
            }, 10);
        }
    }
    
    renderWithToggleAnimation(id) {
        const todoElement = document.querySelector(`[data-id="${id}"]`);
        if (todoElement) {
            todoElement.style.animation = 'taskToggle 0.4s ease-out';
            setTimeout(() => {
                this.render();
            }, 200);
        } else {
            this.render();
        }
    }
    
    updateTaskCounter() {
        const activeCount = this.todos.filter(todo => !todo.completed).length;
        if (this.taskCounter) {
            this.taskCounter.textContent = activeCount;
            this.taskCounter.style.animation = 'counterUpdate 0.3s ease-out';
            setTimeout(() => {
                this.taskCounter.style.animation = '';
            }, 300);
        }
    }
    
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    saveToLocalStorage() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }
    
    loadFromLocalStorage() {
        const saved = localStorage.getItem('todos');
        return saved ? JSON.parse(saved) : [];
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new TodoApp();
});