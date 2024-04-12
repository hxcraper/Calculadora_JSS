import csv

def suma(a, b):
    return a + b

def resta(a, b):
    return a - b

def multiplicacion(a, b):
    return a * b

def division(a, b):
    return a / b

with open('operaciones.csv', mode='w', newline='') as file:
    writer = csv.writer(file)

    while True:
        print("Seleccione la operación:")
        print("1. Suma")
        print("2. Resta")
        print("3. Multiplicación")
        print("4. División")
        print("5. Salir")

        opcion = input("Ingrese el número de la operación que desea realizar: ")

        if opcion == "5":
            print("Saliendo de la calculadora...")
            break
        elif opcion in ["1", "2", "3", "4"]:
            num1 = int(input("Ingrese el primer número: "))
            num2 = int(input("Ingrese el segundo número: "))

            resultado = None
            operacion = None

            if opcion == "1":
                resultado = suma(num1, num2)
                operacion = "suma"
                print("La suma es:", resultado)
            elif opcion == "2":
                resultado = resta(num1, num2)
                operacion = "resta"
                print("La resta es:", resultado)
            elif opcion == "3":
                resultado = multiplicacion(num1, num2)
                operacion = "multiplicación"
                print("La multiplicación es:", resultado)
            elif opcion == "4":
                try:
                    resultado = division(num1, num2)
                    operacion = "división"
                    print("La división es:", resultado)
                except ZeroDivisionError:
                    print("Error: No se puede dividir entre cero.")
                    continue
            
            # Escribir la operación y su resultado en el archivo CSV
            writer.writerow([num1, num2, operacion, resultado])
            print("Resultados enviados al archivo csv")
        else:
            print("Selecciona una opcion valida !!")
