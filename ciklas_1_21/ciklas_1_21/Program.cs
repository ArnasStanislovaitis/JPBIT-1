using System;

namespace ciklas_1_21
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("arge");
            for (int i = 1; i < 21; i++)
            {
                int a = 5;
                int b = a + i;
                Console.WriteLine(a*b);
            }
        }
    }
}
