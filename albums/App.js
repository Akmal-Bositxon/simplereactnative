/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});





public class Notification {
public string Observer;
public String Update(String message){
  WriteLine("Database is updated");
};
public String notifyingObserver(){
  System.put.println("noitied "+Observer);
};
public static void main(String[] args){
  System.out.println("");
};
//implement
public class Subject implements GroupChat {
  update(String message)
  public String writeMessage() {
    System.out.println("message is sent");
  }
};
}




namespace HRDepartment.DesignPatterns.Observer
{
    public interface IUserObserver
    {
        void update(IEmployeeObservable observable);
    }

    public interface IEmployeeObservable
    {
        void addSubscriber(IUserObserver observer);

        void removeSubscriber(IUserObserver observer);
    }


    public class EmployeeObservable : IEmployeeObservable
    {

	ICollection<IUserObserver> subscribersList = new List<IUserObserver>();



        public void addSubscriber(IUserObserver subscriber)
        {
	    subscribersList.Add(subscriber);
	    Console.WriteLine("A subscriber has been added.");
        }



        public void removeSubscriber(IUserObserver subscriber)
        {
            accObservers.Remove(subscriber);
            Console.WriteLine("A subscriber has been removed.");
        }

        // Trigger an update in each subscriber.
        public void notifySubscriber()
        {
            Console.WriteLine("Notifying subscriber...");

            foreach (IUserObserver s in subscribersList)
            {
                s.Update();
            }
        }

    }

    public abstract class Notifier : IUserObserver
    {
        public void Update(IEmployeeObservable accObservable)
        {
	 Console.WriteLine("New notification");
        }

	public virtual display() {};

    }


    class SMSNotifier : Notifier
    {
        public override display()
        {
            Console.WriteLine("SMSNotifier: Client is notified.");
        }
    }

    class EmailNotifier : Notifier
    {
        public override display()
        {
            Console.WriteLine("EmailNotifier: Client is notified.");
	}
    }

    class Program
    {
        static void Main(string[] args)
        {
            // The client code.
	    Account account = new Account();

	    IUserObserver smsNot = new SMSNotifier();

	    account.AddObserver(smsNot);

	    account.AddAccountData(new AccountData(“Charity”, “Transfer”, “40000”));

	    Console.ReadKey();
        }
    }
}
