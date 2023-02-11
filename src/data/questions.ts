import { CheckAnswer } from "../types.ts/chaeckAnswer";

export const dataQuestion = [

    [
        {
            ask: "Что означает аббревиатура JS в программировании?",
            ans: [
                {
                    content: "JavaScript",
                    check: CheckAnswer.right
                },
                {
                    content: "Jason Statham ",
                    check: CheckAnswer.second
                },
                {
                    content: "Just second",
                    check: CheckAnswer.falsy
                },
                {
                    content: "Job sweat",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "Что такое JavaScript?",
            ans: [
                {
                    content: "Язык программирования",
                    check: CheckAnswer.right
                },
                {
                    content: "Язык народов Византийской Империи",
                    check: CheckAnswer.second
                },
                {
                    content: "Наскальные царапания",
                    check: CheckAnswer.falsy
                },
                {
                    content: "Блюдо",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "Где используется JavaScript",
            ans: [
                {
                    content: "В программировании",
                    check: CheckAnswer.right
                },
                {
                    content: "В тюремной лексике ",
                    check: CheckAnswer.second
                },
                {
                    content: "В игре в карты",
                    check: CheckAnswer.falsy
                },
                {
                    content: "Только в кино ",
                    check: CheckAnswer.falsy
                }

            ]

        }
    ],
    [
        {
            ask: "Как расшифровывается HTML",
            ans: [
                {
                    content: "HyperText Markup Language",
                    check: CheckAnswer.right
                },
                {
                    content: "HyperText My Love",
                    check: CheckAnswer.second
                },
                {
                    content: "Hot Top Music List",
                    check: CheckAnswer.falsy
                },
                {
                    content: "Header Title Margin Li",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "Что такое CSS",
            ans: [
                {
                    content: "Cascading Style Sheets",
                    check: CheckAnswer.right
                },
                {
                    content: "Cool Style Sheets",
                    check: CheckAnswer.second
                },
                {
                    content: "Country School Shoes",
                    check: CheckAnswer.falsy
                },
                {
                    content: "Cazhetsja Stili Sleteli",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "Что такое js движок",
            ans: [
                {
                    content: "Программа, обрабатывающая JavaScript",
                    check: CheckAnswer.right
                },
                {
                    content: "Программист, пишущий код",
                    check: CheckAnswer.second
                },
                {
                    content: "Новый двигатель BMW",
                    check: CheckAnswer.falsy
                },
                {
                    content: "Вечеринка в стиле IT",
                    check: CheckAnswer.falsy
                }

            ]

        }
    ],
    [
        {
            ask: "Какого типа данных нет в JS",
            ans: [
                {
                    content: "Char",
                    check: CheckAnswer.right
                },
                {
                    content: "Number",
                    check: CheckAnswer.second
                },
                {
                    content: "Boolean",
                    check: CheckAnswer.falsy
                },
                {
                    content: "Object",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "Какой тип данных есть в JS",
            ans: [
                {
                    content: "Symbol",
                    check: CheckAnswer.right
                },
                {
                    content: "Char",
                    check: CheckAnswer.second
                },
                {
                    content: "Integer",
                    check: CheckAnswer.falsy
                },
                {
                    content: "Mix",
                    check: CheckAnswer.falsy
                }

            ]

        }, {
            ask: "Какой тип данных есть в JS",
            ans: [
                {
                    content: "BigInt",
                    check: CheckAnswer.right
                },
                {
                    content: "BigFloat",
                    check: CheckAnswer.second
                },
                {
                    content: "BigString",
                    check: CheckAnswer.falsy
                },
                {
                    content: "BigObject",
                    check: CheckAnswer.falsy
                }

            ]

        }
    ],
    [
        {
            ask: "Какое обьявление функций не существуют в JS",
            ans: [
                {
                    content: "Function Progression",
                    check: CheckAnswer.right
                },
                {
                    content: "Function Expression",
                    check: CheckAnswer.second
                },
                {
                    content: "Function Decloration",
                    check: CheckAnswer.falsy
                },
                {
                    content: "Arrow Function",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "Какой оператор не относится к логическим в JS",
            ans: [
                {
                    content: "$",
                    check: CheckAnswer.right
                },
                {
                    content: "&&",
                    check: CheckAnswer.second
                },
                {
                    content: "||",
                    check: CheckAnswer.falsy
                },
                {
                    content: "!",
                    check: CheckAnswer.falsy
                }

            ]

        }, {
            ask: "Через какое слово нельзя обьявить переменную в JS",
            ans: [
                {
                    content: "get",
                    check: CheckAnswer.right
                },
                {
                    content: "const",
                    check: CheckAnswer.second
                },
                {
                    content: "var",
                    check: CheckAnswer.falsy
                },
                {
                    content: "let",
                    check: CheckAnswer.falsy
                }

            ]

        }
        
    ],
    [
        {
            ask: "Какую область видимости имеет переменная обьявленная через слово let",
            ans: [
                {
                    content: "Блочную",
                    check: CheckAnswer.right
                },
                {
                    content: "Функциональную",
                    check: CheckAnswer.second
                },
                {
                    content: "Строчную",
                    check: CheckAnswer.falsy
                },
                {
                    content: "Програмную",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "Что обязательно должна иметь конструкция switch в js",
            ans: [
                {
                    content: "блок case",
                    check: CheckAnswer.right
                },
                {
                    content: "блок default",
                    check: CheckAnswer.second
                },
                {
                    content: "блок break",
                    check: CheckAnswer.falsy
                },
                {
                    content: "блок finally",
                    check: CheckAnswer.falsy
                }

            ]

        }, {
            ask: "Что из этого является тернарным оператором?",
            ans: [
                {
                    content: "let res = a ? one : two",
                    check: CheckAnswer.right
                },
                {
                    content: "let res = a ? one \ two",
                    check: CheckAnswer.second
                },
                {
                    content: "let res = a ? one",
                    check: CheckAnswer.falsy
                },
                {
                    content: "let res = a ! one : two",
                    check: CheckAnswer.falsy
                }

            ]

        }
        
    ]

]