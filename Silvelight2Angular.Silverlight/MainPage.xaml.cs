using Silvelight2Angular.Silverlight.BackendServiceReference;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Markup;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Windows.Shapes;

namespace Silvelight2Angular.Silverlight
{
    public partial class MainPage : UserControl
    {
        private CommandClient client;

        public MainPage()
        {
            InitializeComponent();

            this.client = new CommandClient();
            this.client.GetPageCompleted += Client_GetPageCompleted;
            this.client.GetDataCompleted += Client_GetDataCompleted;

            this.client.GetPageAsync(1);
        }

        private void Client_GetPageCompleted(object sender, GetPageCompletedEventArgs e)
        {
            string xaml = e.Result.XAML;
            var page = XamlReader.Load(xaml);
            LayoutRoot.Children.Add(page as UIElement);
            this.client.GetDataAsync(1);
        }

        private void Client_GetDataCompleted(object sender, GetDataCompletedEventArgs e)
        {
            this.DataContext = e.Result;
        }
    }
}
