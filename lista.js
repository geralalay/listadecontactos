import java.util.ArrayList;
import java.util.Scanner;

// Una clase para representar un contacto
class Contacto {
  // Atributos de la clase
  private String nombre;
  private String apellido;

  // Constructor de la clase
  public Contacto(String nombre, String apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  // Métodos de la clase
  // Obtener el nombre del contacto
  public String getNombre() {
    return this.nombre;
  }

  // Obtener el apellido del contacto
  public String getApellido() {
    return this.apellido;
  }

  // Devolver una representación del contacto como una cadena
  public String toString() {
    return this.nombre + " " + this.apellido;
  }
}

// Una clase para manejar una lista de contactos
class ListaContactos {
  // Atributo de la clase
  private ArrayList<Contacto> lista;

  // Constructor de la clase
  public ListaContactos() {
    this.lista = new ArrayList<Contacto>();
    // Agregar algunos contactos predefinidos a la lista
    this.lista.add(new Contacto("Juan", "Pérez"));
    this.lista.add(new Contacto("María", "García"));
    this.lista.add(new Contacto("Pedro", "López"));
    this.lista.add(new Contacto("Ana", "Rodríguez"));
  }

  // Métodos de la clase
  // Añadir un nuevo contacto a la lista
  public void añadirContacto(String nombre, String apellido) {
    this.lista.add(new Contacto(nombre, apellido));
    System.out.println("Se ha añadido el contacto " + nombre + " " + apellido);
  }

  // Borrar un contacto de la lista por su índice
  public void borrarContacto(int indice) {
    if (indice >= 0 && indice < this.lista.size()) {
      Contacto borrado = this.lista.remove(indice);
      System.out.println("Se ha borrado el contacto " + borrado);
    } else {
      System.out.println("Índice inválido");
    }
  }

  // Imprimir la lista completa de contactos en consola
  public void imprimirLista() {
    System.out.println("Lista de contactos:");
    for (int i = 0; i < this.lista.size(); i++) {
      System.out.println((i + 1) + ". " + this.lista.get(i));
    }
  }
}

// Una clase principal para probar el código
public class Main {
  public static void main(String[] args) {
    // Crear una instancia de la clase ListaContactos
    ListaContactos lista = new ListaContactos();
    // Crear un objeto Scanner para leer la entrada del usuario
    Scanner sc = new Scanner(System.in);
    // Mostrar un menú con las opciones disponibles
    System.out.println("Bienvenido al gestor de contactos");
    System.out.println("Seleccione una opción:");
    System.out.println("1. Añadir un nuevo contacto");
    System.out.println("2. Borrar un contacto existente");
    System.out.println("3. Imprimir la lista completa de contactos");
    System.out.println("4. Salir");
    // Leer la opción elegida por el usuario
    int opcion = sc.nextInt();
    // Ejecutar la opción correspondiente mientras no sea salir
    while (opcion != 4) {
      switch (opcion) {
        case 1:
          // Añadir un nuevo contacto
          System.out.println("Ingrese el nombre del nuevo contacto:");
          String nombre = sc.next();
          System.out.println("Ingrese el apellido del nuevo contacto:");
          String apellido = sc.next();
          lista.añadirContacto(nombre, apellido);
          break;
        case 2:
          // Borrar un contacto existente
          System.out.println("Ingrese el índice del contacto a borrar:");
          int indice = sc.nextInt();
          lista.borrarContacto(indice - 1);
          break;
        case 3:
          // Imprimir la lista completa de contactos
          lista.imprimirLista();
          break;
        default:
          // Opción inválida
          System.out.println("Opción inválida");
      }
      // Mostrar el menú nuevamente y leer otra opción
      System.out.println("Seleccione otra opción:");
      opcion = sc.nextInt();
    }
    // Cerrar el objeto Scanner y terminar el programa
    sc.close();
    System.out.println("Gracias por usar el gestor de contactos");
  }
}

