using System;
using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Runtime.Serialization.Formatters.Binary;
using System.Text;
using System.Threading.Tasks;

namespace TestingPro
{
    class Program
    {

        static void Main(string[] args)
        {
            Customer cust1 = new Customer();
            cust1.Id = 1;
            cust1.Name = "Moahmmed";
            cust1.courses = new List<Courses>()
            {
                new Courses() {Id = 1 ,Name = "Arabic" },
            new Courses() { Id = 1, Name = "English" }

        };

        FastDeepCloner fas = new FastDeepCloner(cust1);
            var cust2 = fas.Clone();
            if (Object.ReferenceEquals(cust1, cust2))
            {
                Console.WriteLine("References are the same.");
            }

            else
            {
                Console.WriteLine("References are different.");
            }


            Console.ReadLine();
        }

    }
}

public class BaseModel
{
    public int Id { get; set; }

}
public class Customer : BaseModel
    {
        public string Name { get; set; }
    
        public List<Courses> courses { get; set; }


        public Customer(int ID, string Name)
        {
            this.Id = ID;
            this.Name = Name;
        }


        public Customer()
        {
            this.Id = -1;
            this.Name = string.Empty;
        }


        public void PrintID()
        {
            Console.WriteLine("ID = {0}", this.Id);
        }
        public void PrintName()
        {
            Console.WriteLine("Name = {0}", this.Name);
        }
    }


public class Courses
{
    public int Id { get; set; }
    public string Name { get; set; }
}
