const data = [
  {
    name: "printf()",
    header: "&lt;stdio.h&gt;",
    description: "Выводит форматированную строку.",
    arguments: "const char *format, ..."
  },
  {
    name: "scanf()",
    header: "&lt;stdio.h&gt;",
    description: "Считывает ввод с форматированием.",
    arguments: "const char *format, ..."
  },
  {
    name: "puts()",
    header: "&lt;stdio.h&gt;",
    description: "Выводит строку с переводом строки.",
    arguments: "const char *str"
  },
  {
    name: "fgets()",
    header: "&lt;stdio.h&gt;",
    description: "Читает строку из потока.",
    arguments: "char *str, int n, FILE *stream"
  },
  {
    name: "sprintf()",
    header: "&lt;stdio.h&gt;",
    description: "Форматирует строку в буфер.",
    arguments: "char *str, const char *format, ..."
  },
  {
    name: "snprintf()",
    header: "&lt;stdio.h&gt;",
    description: "Форматирует строку с ограничением размера.",
    arguments: "char *str, size_t size, const char *format, ..."
  },
  {
    name: "fprintf()",
    header: "&lt;stdio.h&gt;",
    description: "Форматирует строку в файл.",
    arguments: "FILE *stream, const char *format, ..."
  },
  {
    name: "fscanf()",
    header: "&lt;stdio.h&gt;",
    description: "Читает форматированные данные из файла.",
    arguments: "FILE *stream, const char *format, ..."
  },
  {
    name: "fopen()",
    header: "&lt;stdio.h&gt;",
    description: "Открывает файл.",
    arguments: "const char *filename, const char *mode"
  },
  {
    name: "fclose()",
    header: "&lt;stdio.h&gt;",
    description: "Закрывает файл.",
    arguments: "FILE *stream"
  },
  {
    name: "fread()",
    header: "&lt;stdio.h&gt;",
    description: "Читает бинарные данные из файла.",
    arguments: "void *ptr, size_t size, size_t count, FILE *stream"
  },
  {
    name: "fwrite()",
    header: "&lt;stdio.h&gt;",
    description: "Записывает бинарные данные в файл.",
    arguments: "const void *ptr, size_t size, size_t count, FILE *stream"
  },
  {
    name: "malloc()",
    header: "&lt;stdlib.h&gt;",
    description: "Выделяет память.",
    arguments: "size_t size"
  },
  {
    name: "calloc()",
    header: "&lt;stdlib.h&gt;",
    description: "Выделяет память и инициализирует нулями.",
    arguments: "size_t num, size_t size"
  },
  {
    name: "realloc()",
    header: "&lt;stdlib.h&gt;",
    description: "Изменяет размер выделенной памяти.",
    arguments: "void *ptr, size_t size"
  },
  {
    name: "free()",
    header: "&lt;stdlib.h&gt;",
    description: "Освобождает выделенную память.",
    arguments: "void *ptr"
  },
  {
    name: "strlen()",
    header: "&lt;string.h&gt;",
    description: "Возвращает длину строки.",
    arguments: "const char *str"
  },
  {
    name: "strcpy()",
    header: "&lt;string.h&gt;",
    description: "Копирует строку.",
    arguments: "char *dest, const char *src"
  },
  {
    name: "strncpy()",
    header: "&lt;string.h&gt;",
    description: "Копирует строку с ограничением длины.",
    arguments: "char *dest, const char *src, size_t n"
  },
  {
    name: "strcat()",
    header: "&lt;string.h&gt;",
    description: "Дописывает строку в конец другой.",
    arguments: "char *dest, const char *src"
  },
  {
    name: "strncat()",
    header: "&lt;string.h&gt;",
    description: "Дописывает строку с ограничением длины.",
    arguments: "char *dest, const char *src, size_t n"
  },
  {
    name: "strcmp()",
    header: "&lt;string.h&gt;",
    description: "Сравнивает две строки.",
    arguments: "const char *str1, const char *str2"
  },
  {
    name: "strncmp()",
    header: "&lt;string.h&gt;",
    description: "Сравнивает первые N символов двух строк.",
    arguments: "const char *str1, const char *str2, size_t n"
  },
  {
    name: "memcpy()",
    header: "&lt;string.h&gt;",
    description: "Копирует блок памяти.",
    arguments: "void *dest, const void *src, size_t n"
  },
  {
    name: "memset()",
    header: "&lt;string.h&gt;",
    description: "Заполняет блок памяти заданным значением.",
    arguments: "void *s, int c, size_t n"
  },
  {
    name: "time()",
    header: "&lt;time.h&gt;",
    description: "Возвращает текущее время в секундах с 1970 года.",
    arguments: "time_t *t"
  },
  {
    name: "clock()",
    header: "&lt;time.h&gt;",
    description: "Возвращает количество тактов процессора.",
    arguments: "void"
  },
  {
    name: "rand()",
    header: "&lt;stdlib.h&gt;",
    description: "Генерирует псевдослучайное число.",
    arguments: "void"
  },
  {
    name: "srand()",
    header: "&lt;stdlib.h&gt;",
    description: "Задает начальное значение для rand().",
    arguments: "unsigned int seed"
  },
  {
    name: "abs()",
    header: "&lt;stdlib.h&gt;",
    description: "Возвращает абсолютное значение.",
    arguments: "int x"
  },
  {
    name: "sqrt()",
    header: "&lt;math.h&gt;",
    description: "Вычисляет квадратный корень.",
    arguments: "double x"
  },
  {
    name: "pow()",
    header: "&lt;math.h&gt;",
    description: "Возводит число в степень.",
    arguments: "double base, double exp"
  },
  {
    name: "sin()",
    header: "&lt;math.h&gt;",
    description: "Вычисляет синус угла.",
    arguments: "double x"
  },
  {
    name: "cos()",
    header: "&lt;math.h&gt;",
    description: "Вычисляет косинус угла.",
    arguments: "double x"
  },
  {
    name: "tan()",
    header: "&lt;math.h&gt;",
    description: "Вычисляет тангенс угла.",
    arguments: "double x"
  },
  {
    name: "tolower()",
    header: "&lt;ctype.h&gt;",
    description: "Преобразует символ в нижний регистр.",
    arguments: "int c"
  },
  {
    name: "toupper()",
    header: "&lt;ctype.h&gt;",
    description: "Преобразует символ в верхний регистр.",
    arguments: "int c"
  },
  {
    name: "isdigit()",
    header: "&lt;ctype.h&gt;",
    description: "Проверяет, является ли символ цифрой.",
    arguments: "int c"
  },
  {
    name: "isalpha()",
    header: "&lt;ctype.h&gt;",
    description: "Проверяет, является ли символ буквой.",
    arguments: "int c"
  },
  {
    name: "isupper()",
    header: "&lt;ctype.h&gt;",
    description: "Проверяет, является ли символ заглавной буквой.",
    arguments: "int c"
  },
  {
    name: "islower()",
    header: "&lt;ctype.h&gt;",
    description: "Проверяет, является ли символ строчной буквой.",
    arguments: "int c"
  },
  {
    name: "isalnum()",
    header: "&lt;ctype.h&gt;",
    description: "Проверяет, является ли символ буквой или цифрой.",
    arguments: "int c"
  },
  {
    name: "exit()",
    header: "&lt;stdlib.h&gt;",
    description: "Завершает выполнение программы.",
    arguments: "int status"
  },
  {
    name: "system()",
    header: "&lt;stdlib.h&gt;",
    description: "Выполняет команду в командной строке.",
    arguments: "const char *command"
  },
  {
    name: "getchar()",
    header: "&lt;stdio.h&gt;",
    description: "Считывает символ из стандартного ввода.",
    arguments: "void"
  },
  {
    name: "putchar()",
    header: "&lt;stdio.h&gt;",
    description: "Выводит символ в стандартный поток вывода.",
    arguments: "int c"
  }
];
const input = document.getElementById("search-container");
const output = document.getElementById("founded-elements");
const totalFound = document.getElementById("total_found");
const checkboxes = document.querySelectorAll('#filter-container input[type="radio"]');
console.log(checkboxes);

//const найденные = массив.filter(строка => строка.includes(слово));
//const массив = текст.split(" ");

//if (текст.includes(слово)) {
//  console.log("Найдено!");
//}

console.log(data);

function search(exemp) {
  console.clear();
  let type_search;
  for (let i = 0; i < checkboxes.length; i++) {
    const cb = checkboxes[i];
    console.log(cb.checked);
    if(cb.checked) {
      if (cb.value == "des") type_search = "description";
      if (cb.value == "name") type_search = "name";
      if (cb.value == "head") type_search = "header";
      if (cb.value == "arg") type_search = "arguments";
      break;
    }
  }
  console.log(type_search);
  

  output.innerHTML = "";
  console.log("Searching");
  let sucess = 0;
  for (i = 0; i < data.length; ++i) {
    if (data[i][type_search].includes(exemp)) {
      console.log(data[i][type_search]);
      found_elem_render(data[i]);
      ++sucess;
      totalFound.innerHTML = sucess;
    }
  }
  console.log(sucess);
  if (sucess != 0) {
    output.innerHTML +=`
    <thead>
            <tr>
                <th>name</th>
                <th>arg</th>
                <th>header</th>
                <th>descript</th>
            </tr>
    </thead>`;
  }
  else {
    output.innerHTML = `<h2 class = "notFound">Not Found</h2>`;
    totalFound.innerHTML = 0;
  }
}

function found_elem_render(data) {
  output.innerHTML += `
      <tr>
            <th>${data.name}</th>
            <th>${data.arguments}</th>
            <th>${data.header}</th>
            <th>${data.description}</th>
      </tr>
  `;
}


window.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    if (input.value != "" && input.value != " ") {
      search(input.value);
      input.value = "";
    }
  }
}
);

document.getElementById("search-btn").addEventListener('click', () => {
  if (input.value != "" && input.value != " ") {
    search(input.value);
    input.value = "";
  }
});