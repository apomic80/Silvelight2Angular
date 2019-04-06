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
        public MainPage()
        {
            InitializeComponent();
            var client = new CommandClient();
            client.GetPageCompleted += Client_GetPageCompleted;
            client.GetPageAsync(1);
        }

        private void Client_GetPageCompleted(object sender, GetPageCompletedEventArgs e)
        {
            string xaml = e.Result.XAML;
            var page = XamlReader.Load(xaml);
            LayoutRoot.Children.Add(page as UIElement);
        }
    }
}
